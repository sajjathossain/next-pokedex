import type { NextPage } from 'next'
import {useEffect} from "react";
import {useRouter} from "next/router";
import {makePublicUrl} from "../lib/routes";

const Index: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(makePublicUrl('/home')).then(res => console.log(res))
    }, [])
  return null
}

export default Index
