import React from 'react'
import {Text,View,ActivityIndicator,StyleSheet} from 'react-native'
import FilmDetail from './FilmDetail'
import FilmList from './FilmList'
import {connect} from 'react-redux'
 class FavoriteFilm extends React.Component {
constructor(props){
    super(props)
    this.state = {
        films :[],
        isLoading : false
    }
}
_displayLoading = () => {
    if(this.state.isLoading){
        return(
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}
_displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail", { idFilm : idFilm })
   
}

    render() {
        return (
            
              <View style={styles.coutainer}>
                 <FilmList 
                films = {this.props.favoritesFilm}
                navigation = {this.props.navigation}
                loadFilms= {this._loadFilm}
                page = {this.page}
                totalPages= {this.totalPages}
                
                />
               
               {this._displayLoading()}
                
              </View>
            
        )
    }
}
const styles = StyleSheet.create({
    coutainer : {
        flex : 1
        

    }
})

const mapStateToProps = (state)=>{
    return {
        favoritesFilm : state.favoritesFilm
    }
}

export default connect(mapStateToProps)(FavoriteFilm)
