'use client'
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'
export default function Say() {
    const [sayHello, setSayHello] = useState('');
  
    useEffect(() => {
      invoke('say', { name: 'Next.js' })
        .then(result => setSayHello(result))
        .catch(console.error)
    }, [])
  
    return <h1>{sayHello}</h1>;
  }