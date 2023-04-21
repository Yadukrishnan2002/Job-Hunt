import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import JobCard from './JobCard'

const RecentJobList = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.HeadingContainer}>
            <Text style = {styles.HeadingText}>Recent Job List</Text>
            <View>
                <TouchableOpacity>
                    <Text style = {styles.SeeAllText}>See all</Text>
                </TouchableOpacity>
            </View>
            
        </View>

        <View style = {styles.JobList}>
            <JobCard />
        </View>
      
    </View>
  )
}

export default RecentJobList

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 24,
        
        
    },
    HeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HeadingText: {
        fontSize: 27,
        fontWeight: '600',
    },
    SeeAllText: {
        color: '#636363'
    },
})