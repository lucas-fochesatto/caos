// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

error NotOwner();

import "./PriceConverter.sol";

contract Maintenance {

    address public immutable i_owner;
    using PriceConverter for uint256;

    constructor() {
        i_owner = msg.sender;
    }

    struct MaintenanceRequest {
        string name;
        uint256 apartment;
        address residentWallet;
        string description;
        uint256 costInUsd;
        bool paid;
    }

    MaintenanceRequest[] public maintenanceRequest;
    mapping(address => uint256) public addressToAmountPayed;
    mapping(address => bool) public hasPaid;

    function addRequest (string memory _name, uint256 _apartment, address _residentWallet, string memory _description, uint256 _costInUsd) public {
        bool found = false;
        for(uint256 i = 0; i < maintenanceRequest.length; i++) {
            if (maintenanceRequest[i].residentWallet == _residentWallet) {
                maintenanceRequest[i].costInUsd += _costInUsd;
                maintenanceRequest[i].description = string(abi.encodePacked(maintenanceRequest[i].description, ", ", _description));
                found = true;
                break;
            }
        }
        if(!found){
            maintenanceRequest.push(MaintenanceRequest(_name, _apartment,  _residentWallet, _description, _costInUsd, false));
            hasPaid[_residentWallet] = false;
        }
    }

    function getMaintenanceCostByAddress(address _wallet) public view returns (uint256) {
        for(uint256 i = 0; i < maintenanceRequest.length; i++) {
            if (maintenanceRequest[i].residentWallet == _wallet) {
                return maintenanceRequest[i].costInUsd;
            }
        }
        revert("Maintenance request not registered!");
    }

    function pay() public payable {
        uint256 amountDue = getMaintenanceCostByAddress(msg.sender);
        require(msg.value.getConversionRate() >= amountDue, "Didn't send enough!");
        addressToAmountPayed[msg.sender] = msg.value;
        hasPaid[msg.sender] = false;
        for (uint256 i = 0; i < maintenanceRequest.length; i++){
            if(maintenanceRequest[i].residentWallet == msg.sender){
                maintenanceRequest[i].paid = true;
                break;
            }
        }
    }

    function withdraw() public onlyOwner {  
        for(uint256 i = 0; i < maintenanceRequest.length; i++) {
           if(maintenanceRequest[i].paid == true) {
                delete maintenanceRequest[i];
           }
        }
        cleanUpMaintenanceRequestArray();
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed!");
    }

    function cleanUpMaintenanceRequestArray() internal {
        uint256 i = 0;
        while (i < maintenanceRequest.length) {
            if (maintenanceRequest[i].costInUsd == 0) {
                if (i != maintenanceRequest.length - 1) {
                    maintenanceRequest[i] = maintenanceRequest[maintenanceRequest.length - 1];
                }
                maintenanceRequest.pop();
            } else {
                i++;
            }
        }
    }

    modifier onlyOwner {
        require(msg.sender == i_owner, "Sender is not owner!");
        if(msg.sender != i_owner) { revert NotOwner(); }
        _; 
    }
 
    receive() external payable {
        pay();
    }    

    fallback() external payable {
        pay();
    }
}
