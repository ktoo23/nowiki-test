import { useState, useEffect } from 'react'
import useSpeechToText from '../../hooks/useSpeechToText'
import MicImage from '../../assets/image/mic.png'
import Fuse from 'fuse.js'
import menuData from '../../assets/data/menu.json'
import { MenuItem } from '@/types/menu.interface'
import VoiceSearchedMenuList from './VoiceSearchedMenuList'

interface FuzeItem {
    item: MenuItem
    refIndex?: number
}

const Voice = () => {
    const { transcript, listening, toggleListening } = useSpeechToText()
    const [dots, setDots] = useState('')
    const [searchResults, setSearchResults] = useState<FuzeItem[]>([])
    const [selectedMenuItems, setSelectedMenuItems] = useState<MenuItem[]>([])

    const recommendedMenu = [
        {
            item: menuData.menu_items[0],
            refIndex: 0,
        },
        {
            item: menuData.menu_items[4],
            refIndex: 4,
        },
        {
            item: menuData.menu_items[7],
            refIndex: 7,
        },
        {
            item: menuData.menu_items[8],
            refIndex: 8,
        },
    ]

    const onClickVoiceButton = () => {
        toggleListening()
        setSearchResults([])
        setSelectedMenuItems([])
    }

    useEffect(() => {
        if (transcript) {
            const interval = setInterval(() => {
                setDots((prev) => (prev.length < 3 ? prev + '.' : ''))
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [transcript])

    useEffect(() => {
        if (transcript && !listening) {
            const menuFuse = new Fuse(menuData.menu_items, {
                keys: ['name', 'description'],
            })

            // const menuMealsFuse = new Fuse(menuData.meals, {
            //     keys: ['name', 'description'],
            // })

            const menuItemResults = menuFuse.search(transcript)
            // const mealResults = menuMealsFuse.search(transcript)

            setSearchResults(menuItemResults)
        }
    }, [transcript, listening])

    const handleMenuItemClick = (item: MenuItem) => {
        setSelectedMenuItems((prevItems) => {
            // Check if the item is already selected
            const isItemSelected = prevItems.some((selectedItem) => selectedItem.id === item.id)

            if (isItemSelected) {
                // If the item is already selected, remove it from the array
                return prevItems.filter((selectedItem) => selectedItem.id !== item.id)
            } else {
                // If the item is not selected, add it to the array
                return [...prevItems, item]
            }
        })
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
            }}
        >
            <h1 style={{ marginBottom: '1rem', fontWeight: '600' }}>말해서 메뉴 찾기</h1>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                마이크 버튼을 클릭하고 검색하려는 메뉴의 이름을 말해주세요.
            </p>
            <button
                onClick={onClickVoiceButton}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100px',
                    height: '100px',
                    border: 'none',
                    borderRadius: '50%',
                    backgroundColor: listening ? '#4CAF50' : '#f0f0f0',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={MicImage}
                    alt='마이크 이미지'
                    style={{
                        height: '50px',
                        filter: listening ? 'brightness(0) invert(1)' : 'none',
                    }}
                />
            </button>
            <p
                style={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: listening ? '#4CAF50' : '#333',
                }}
            >
                {listening ? '음성인식 중...' : '음성인식 시작'}
            </p>
            {transcript && !listening && (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '1rem',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}
                    >
                        <p style={{ fontWeight: '700', fontSize: '1.2rem' }}> {transcript}</p>
                        <p>로 검색중이예요</p>
                        <p>{dots}</p>
                    </div>
                    {searchResults.length > 0 ? (
                        <div style={{ width: '100%', marginTop: '2rem' }}>
                            <h2
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                다음과 같은 메뉴들을 발견했어요!
                            </h2>
                            <VoiceSearchedMenuList
                                items={searchResults.map((result) => result.item)}
                                onClick={handleMenuItemClick}
                                selectedItems={selectedMenuItems}
                            />
                        </div>
                    ) : (
                        <div>
                            <p
                                style={{
                                    marginTop: '2rem',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                검색 결과가 없습니다. 이런 메뉴는 어때요??
                            </p>
                            <VoiceSearchedMenuList
                                items={recommendedMenu.map((result) => result.item)}
                                onClick={handleMenuItemClick}
                                selectedItems={selectedMenuItems}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Voice
