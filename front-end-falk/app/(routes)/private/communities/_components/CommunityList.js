import React from 'react'
import CommunityItem from './CommunityItem'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'


function CommunityList( { communityList } ) {
  return (
    <div>
        <div className='flex items-center gap-2 bg-slate-100 p-2 rounded-lg mt-3'>
            <Search height={20} width={20}/>
            <Input variant="comment" className="border border-black" placeholder="Pesquise por comunidades"/>
        </div>
        {!communityList ? [1,2,3].map((item, index) => (
        <div key={index}>
            <CommunityItem />
        </div>
    )):
        <div>
            {[1,2,3,4].map((item, index) => (
                <div className='h-[100px] w-full bg-slate-200 animate-pulse my-5 rounded-lg'> 
                </div>
            ))}
        </div>
    }
    </div>
  )
}

export default CommunityList