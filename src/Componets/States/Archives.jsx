import React from 'react'
import { ArchiveCard } from '../MovieArchives/ArchiveCard'
import { WatchCard } from '../WatchList/WatchCard'
import './Archive.css'

export const Archives = () => {
  return (
    <main className='main'>
        <aside className='archive'>
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
            <ArchiveCard /> 
        </aside>
        <aside className='watchlist'>
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
        </aside>
    </main>
  )
}
