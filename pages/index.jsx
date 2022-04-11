// No hace falta importar react
// import React from "react";

import Head from "next/dist/shared/lib/head"
import Container from "../components/container"
import fetch from "isomorphic-fetch"
import Users from "../components/users"

const Index = ({user}) => {

    return (
        <>
            <Head>
                <title>Next.js Proyect - Home</title>
            </Head>
            <Container>
                <h1>Next</h1>
                <Users user={user}/>
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) =>{
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return {user:data.data}
}   

export default Index