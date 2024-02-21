import React, { useEffect, useState } from 'react'
import CommunityItem from './CommunityItem'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { getAllCommunity } from '@/services/communityFunctions'


function CommunityList( { communityList } ) {

   const [filterText, setFilterText] = useState("")

   const filterComm = (comm) => {
    const searchText = filterText.toLowerCase();
    return (
        comm.communityName.toLowerCase().startsWith(searchText)
    );
};

   const commFiltered = communityList.filter((item) => filterComm(item))
  

  return (
    <div>
        <div className='flex items-center gap-2 bg-slate-100 p-2 rounded-lg mt-3'>
            <Search height={20} width={20}/>
            <Input variant="comment" className="border border-black" placeholder="Pesquise por comunidades" onChange={(e) => setFilterText(e.target.value)}/>
        </div>
        {communityList && commFiltered.length != 0 ? (
            commFiltered.map((item, index) => (
                <div key={index}>
                    <CommunityItem content={item} />
                </div>
            ))
            ) : (
                <div>
                    <h1>Nada foi encontrado</h1>    
                </div>
            )}

        {/* Elementos de carregamento */}
        {!communityList && (
            <div>
                {[1,2,3,4].map((item, index) => (
                    <div className='h-[100px] w-full bg-slate-200 animate-pulse my-5 rounded-lg' key={index}> 
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default CommunityList