import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TopNavbar = () => {
  return (
    <View styles = {styles.container}>
      <View style = {styles.Navbar}>

        <TouchableOpacity>
            <Image style = {styles.MenuStyles} source = {require('../assets/Essentials/Menu.png')} />
        </TouchableOpacity>

        <View style = {styles.searchProfileWrapper}>
            <View style = {styles.SearchIcon}>
              <TouchableOpacity>
                <Image style = {{height: 30,width: 30}} source = {require('../assets/Essentials/search.png')} />
              </TouchableOpacity>
            </View>

            <View style = {styles.ProfileIcon}>
              <TouchableOpacity>
                <Image style = {{height: 35,width: 35}} source = {require('../assets/Essentials/profile.png')} />
              </TouchableOpacity>
            </View>

        </View>

      </View>
      
    </View>
  )
}

export default TopNavbar

const styles = StyleSheet.create({
    container:{
      
    },

    MenuStyles: {
      height: 30,
      width: 30,
    },
    Navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 10,
    },
    searchProfileWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    SearchIcon: {
      marginRight: 15,
    },
})