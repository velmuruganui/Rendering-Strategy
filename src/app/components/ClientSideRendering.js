'use client'

import { useState, useEffect } from 'react'

export default function CSR() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>Loading...</div>
  return <div>{data.message}</div>
}