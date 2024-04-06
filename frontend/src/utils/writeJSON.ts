import managersJSON from '../database/managers.json'
import fs from 'fs'

export default function write({address, buildingName} : {address: string; buildingName: string}) {
    const database = managersJSON

    let manager = {
        address,
        buildingName
    }

    database.push(manager)

    let json = JSON.stringify(database)

    fs.writeFile('./database/managers.json', json, (err) => console.log(err))
}