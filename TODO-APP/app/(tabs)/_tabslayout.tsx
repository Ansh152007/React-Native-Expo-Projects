import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{}}>
        <Tabs.Screen
        name='tasks'
        options={{
            title : "Tasks",
            tabBarIcon: ({color, size})=>(
                <Ionicons name="list" />
            )
            
        }}
         />
    </Tabs>
   
  )
}

export default TabsLayout