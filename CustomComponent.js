import React, {Component} from 'react'
import {Animated, TouchableHighlight, View} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

const SIZE = 80

export default class AddButton extends Component {
    mode = new Animated.Value(0)

    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 1000
        }).start()
    }

    render() {
        const x1 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -36.57]
        })
        const y1 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -36.57]
        })
        const x2 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        })
        const y2 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -60]
        })
        const x3 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 76.57]
        })
        const y3 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -36.57]
        })

        const x4 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -36.57]
        })
        const y4 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 76.57]
        })
        const x5 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        })
        const y5 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 100]
        })
        const x6 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 76.57]
        })
        const y6 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 76.57]
        })

        const x7 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -60]
        })
        const y7 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        })

        const x8 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 100]
        })
        const y8 = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        })

        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        const mainRotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '315deg']
        })

        const firstRotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        })

        const secondRotation = this.mode.interpolate({
            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            outputRange: ['0deg', '-45deg', '0deg', '45deg', '0deg', '-45deg', '0deg', '45deg', '0deg', '-45deg', '0deg']
        })

        const thirdRotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <Animated.View style={{
                    position: 'absolute',
                    left: x1,
                    top: y1,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: 5, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: firstRotation}
                            ]
                        }}>
                            <Icon name='ios-heart' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: x2,
                    top: y2,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: 0, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: secondRotation}
                            ]
                        }}>
                            <Icon name='ios-eye' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: x3,
                    top: y3,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: -5, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: thirdRotation}
                            ]
                        }}>
                            <Icon name='ios-map' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>





                <Animated.View style={{
                    position: 'absolute',
                    left: x4,
                    top: y4,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: 5, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: firstRotation}
                            ]
                        }}>
                            <Icon name='ios-send' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: x5,
                    top: y5,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: 0, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: secondRotation}
                            ]
                        }}>
                            <Icon name='ios-search' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: x6,
                    top: y6,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: -5, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: thirdRotation}
                            ]
                        }}>
                            <Icon name='ios-settings' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>




                <Animated.View style={{
                    position: 'absolute',
                    left: x7,
                    top: y7,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: 0, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: firstRotation}
                            ]
                        }}>
                            <Icon name='ios-share' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: x8,
                    top: y8,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: 'rgb(0, 122, 204)',
                            shadowColor: 'grey',
                            shadowOffset: {width: -5, height: 20},
                            shadowOpacity: 1,
                            shadowRadius: 10
                        }}
                    >
                        <Animated.View style={{
                            transform: [
                                {rotate: thirdRotation}
                            ]
                        }}>
                            <Icon name='ios-thumbs-up' size={22} color='#F8F8F8'/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>






                <TouchableHighlight
                    onPress={this.toggleView}
                    underlayColor='rgba(0, 122, 204, 0.5)'
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: 'rgb(0, 122, 204)',
                        shadowColor: 'grey',
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: 1,
                        shadowRadius: 5
                    }}
                >
                    <Animated.View style={{
                        transform: [
                            {rotate: mainRotation}
                        ]
                    }}>
                        <Icon name='md-add' size={48} color='#F8F8F8'/>
                    </Animated.View>
                </TouchableHighlight>
            </View>
        )
    }
}