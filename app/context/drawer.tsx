"use client"

import React, { createContext, FC, ReactNode, useState, useContext } from "react"

type Props = {
  children: ReactNode;
}

type DrawerContextType = {
  leftOpen: boolean;
  rightOpen: boolean;
  drawerWidth: number;
  handleRightDrawerOpen: () => void;
  handleLeftDrawerOpen: () => void;
  handleRightDrawerClose: () => void;
  handleLeftDrawerClose: () => void;
}

const DrawerContext = createContext<DrawerContextType>({} as DrawerContextType)

export const DrawerContextProvider: FC<Props> = ({ children }) => {
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
    <DrawerContext.Provider value={{
      leftOpen,
      rightOpen,
      drawerWidth,
      handleRightDrawerOpen,
      handleLeftDrawerOpen,
      handleRightDrawerClose,
      handleLeftDrawerClose
    }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useGrobalDrawerContext = () => useContext(DrawerContext)
