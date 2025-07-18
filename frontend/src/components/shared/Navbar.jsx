import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { LogOut, User2 } from 'lucide-react'

function Navbar() {
    const user = false;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job <span className='text-red-600'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-2'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex itmes-center gap-1 '>
                                <Button variant="outline">Login</Button>
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='h-7 w-7 rounded-xl' />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='shadow'>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className='cursor-pointer'>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='h-7 w-7 rounded-xl' />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Krishna Rana</h4>
                                                <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            <div className='flex w-fit items-centergap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                            <div className='flex w-fit items-centergap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>
                                        </div>

                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar