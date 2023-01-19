"use client"

import React, { createContext, FC, ReactNode, useState, useContext } from "react"

type Props = {
  children: ReactNode;
}

type ContextType = {
  leftOpen: boolean;
  rightOpen: boolean;
  drawerWidth: number;
  handleRightDrawerOpen: () => void;
  handleLeftDrawerOpen: () => void;
  handleRightDrawerClose: () => void;
  handleLeftDrawerClose: () => void;
}

const ValuesContext = createContext<ContextType>({} as ContextType)

export const ValuesContextProvider: FC<Props> = ({ children }) => {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const drawerWidth = 240

  const handleRightDrawerOpen = () => {
    setRightOpen(true)
  }

  const handleRightDrawerClose = () => {
    setRightOpen(false)
  }

  const handleLeftDrawerOpen = () => {
    setLeftOpen(true)
  }

  const handleLeftDrawerClose = () => {
    setLeftOpen(false)
  }

  return (
    <ValuesContext.Provider value={{
      leftOpen,
      rightOpen,
      drawerWidth,
      handleRightDrawerOpen,
      handleLeftDrawerOpen,
      handleRightDrawerClose,
      handleLeftDrawerClose
    }}>
      {children}
    </ValuesContext.Provider>
  )
}

export const useGrobalContext = () => useContext(ValuesContext)
