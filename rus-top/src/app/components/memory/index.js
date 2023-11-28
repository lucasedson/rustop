'use client'
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'
export default function MemoryInfo() {
    const [memory, setMemory] = useState('');
  
    useEffect(() => {
        setInterval(() =>{

            invoke('get_all_info_system')
            .then(result => setMemory(result))
            .catch(console.error)
        }, 500)
        }, [])
        
        return <>
        <p>Memória Total: <b>{Math.round(memory.total_memory / 1024 /1024 /1024)} GB</b></p>
        <p>Memória Usada: <b>{(memory.used_memory / 1024 / 1024 / 1024).toFixed(2) }GB</b></p>
        <p>Memória Livre: <b>{(memory.free_memory / 1024 / 1024 / 1024).toFixed(2) }GB</b></p>
        </>
    }