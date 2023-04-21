import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import JobCategories from '../Components/JobCategories'
import RecentJobList from '../Components/RecentJobList'

const Home = () => {
  return (
    <View style = {styles.HomeContainer}>
      <TopNavbar />
      <JobCategories />
      <RecentJobList />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    HomeContainer: {
        marginTop: 50,
        
    },
})