// import React from 'react'

import { useState, useEffect } from "react"
import { getLocation } from "../fetch.js"

export default function Locations() {
    const [show, setShow] = useState(false)
    const [locations, setLocations] = useState([])
    const [id, setId] = useState("")

    function sortName() {
        const newArr = locations.sort((a, b) => a.name.localeCompare(b.name))
        setLocations(newArr)
        setId("name")
    }

    function sortClimate() {
        const newArr = locations.sort((a, b) => a.climate.localeCompare(b.climate))
        setLocations(newArr)
        setId("climate")
    }

    function sortTerrain() {
        const newArr = locations.sort((a, b) => a.terrain.localeCompare(b.terrain))
        setLocations(newArr)
        setId("terrain")
    }

    async function settingLocations() {
        const newLoc = await getLocation()
        setLocations(newLoc)
        if (id === "name") {
            sortName()
        } else if (id === "climate") {
            sortClimate()
        } else if (id === "terrain") {
            sortTerrain()
        }
        console.log(locations)
    }


    function toggleShow() {
        setShow(!show)
    }

    useEffect(() => {
        settingLocations()
    }, [])

    return (
        <div className="locations">
            <h2>List of Locations</h2>
            <button onClick={toggleShow}>
                {show ? "Hide Locations" : "Show Locations"}
            </button>
            {
                show ? (<div>
                    <button onClick={sortName}>Sort by Name</button>
                    <button onClick={sortClimate}>Sort by Climate</button>
                    <button onClick={sortTerrain}>Sort by Terrain</button>
                </div>) : (null)
            }
            <ul style={show ? { display: "block" } : { display: "none" }}>
                {
                    locations.map((loc) => {
                        return (
                            <ul>
                                <li>Name: <span>{loc.name}</span></li>
                                <li>Climate: <span>{loc.climate}</span></li>
                                <li><span>Terrain: </span>{loc.terrain}</li>
                            </ul>
                        )
                    })
                }
            </ul>
        </div>
    )
}