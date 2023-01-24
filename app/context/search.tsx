"use client"

import React, { createContext, FC, ReactNode, useState, useContext } from "react"

type Props = {
  children: ReactNode;
}

type SearchContextType = {
  leftOpen: boolean;
  rightOpen: boolean;
  drawerWidth: number;
  handleRightSearchOpen: () => void;
  handleLeftSearchOpen: () => void;
  handleRightSearchClose: () => void;
  handleLeftSearchClose: () => void;
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType)

export const SearchContextProvider: FC<Props> = ({ children }) => {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const drawerWidth = 240

  const handleRightSearchOpen = () => {
    setRightOpen(true)
  }

  const handleRightSearchClose = () => {
    setRightOpen(false)
  }

  const handleLeftSearchOpen = () => {
    setLeftOpen(true)
  }

  const handleLeftSearchClose = () => {
    setLeftOpen(false)
  }

  return (
    <SearchContext.Provider value={{
      leftOpen,
      rightOpen,
      drawerWidth,
      handleRightSearchOpen,
      handleLeftSearchOpen,
      handleRightSearchClose,
      handleLeftSearchClose
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useGrobalSearchContext = () => useContext(SearchContext)
