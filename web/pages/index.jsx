import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ethers, providers} from 'ethers'

import {client, recommendProfiles} from '../api' // 
import React, { useState } from 'react'
import Link from 'next/link'

import ABI from '../abi'
import { AbiCoder } from 'ethers/lib/utils'
const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"

// async function connect() {
//   const accounts = await window.ethereum.request({
//     method: "eth_requestAccounts"
//   })
//   console.log({ accounts })
// }

// async function followUser() {
//   const provider = new ethers.provider.Web3Provider(window.ethereum)
//   const signer = provider.getSigner()

//   const contract = new ethers.Contract (
//     AbiCoder,
//     signer
//   )
//   try {
//     const tx = contract.follow(
//       [id], [0x0]
//     )
//     await tx.wait()
//     console.log("follwed successfully")
//   } catch (err) {
    
//   }
// }

export default function Home() {
  const [profiles, setProfiles] = useState([])
  React.useEffect(() => {
    fetchProfiles()
  },[])

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise()
      //console.log({response})
      setProfiles(response.data.recommendedProfiles)
    } catch (err) {
      //console.log({err})
    }
    
  }
  // creating 
  return (
    <div className={styles.container}> 
    {/* <button onClick = {connect}>Signin</button> */}
    {
      profiles.map((profile, index) => (
        <Link href={`/profile/${profile.id}`}>
            <div>
              <h1>{profile.handle}</h1>
              <p>{profile.bio}</p>
            </div>
        </Link>
      ))
    }
    </div>
  )
}

