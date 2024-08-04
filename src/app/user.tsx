"use client"

import { useState } from "react"




export default function UserInfo() {

    const [userName, setUserName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [userId, setUserId] = useState("")



    return (
        <div>
             <h1 style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor:"black",
                color:"yellow"
            }}>Products List</h1>
            <br />

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                

            }}>
                <label htmlFor="User Name :">
                    User Name :
                    <input type="text"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value)
                        }}
                    />
                </label>
                <label htmlFor="Fathers Name :">
                    Fathers Name :
                    <input type="text"
                        value={fatherName}
                        onChange={(event) => {
                            setFatherName(event.target.value)
                        }}
                    />
                </label>
                <label htmlFor="User ID :">
                    User ID:
                    <input type="text"
                        value={userId}
                        onChange={(event) => {
                            setUserId(event.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <table className="my-info-table" style={{ marginTop: "20px", width: "100%",borderCollapse: "collapse",
                    backgroundColor:"#00c0ff",color:"black"
                }} >
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                {userName}
                            </th>
                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                {fatherName}
                            </th>
                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                {userId}
                            </th>
                        </tr>
                    </thead>
                </table>



            </div>
        </div>


    )
}