import {createStackNavigator} from 'react-navigation'
import Aval from './component/Aval'
import Aks from './component/Aks'
import Dovom from './component/Dovom'
import Sevom from './component/Sevom'


const Stacking=createStackNavigator({
    aks:Aks,
    aval:Aval,
    dovom: Dovom,
    sevom:Sevom
},{
    initialRouteName:"aval",
    navigationOptions:{
        header:null
    }
})

export default Stacking;