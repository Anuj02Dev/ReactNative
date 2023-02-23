import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, ScrollView, StyleSheet, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const screenName = (item, key) => {

    switch (item) {
        case "Home":
            return 'CarouselImg';
            break;
        default:
            return "Home"
    }

}

const CONTENT = [
    {
        isExpended: false,
        category_name: 'Home',
        subCategory: [
            { id: 3, val: ['Home', "Pet", 'Meow'] },
        ]
    }
]

const ExpandebleComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0)
    const [geticon, seticon] = useState('plus')
    const navigation = useNavigation();


    useEffect(() => {
        if (item.isExpended) {
            setLayoutHeight(null)
            seticon('minus')
        }
        else {
            setLayoutHeight(0)
            seticon('plus')
        }
    }, [item.isExpended])

    return (
        <View>
            <TouchableOpacity onPress={onClickFunction}>
                <View style={style.expandBtn}>
                    <View style={style.imgcontainner}>
                    </View>
                    <View style={style.textContainner}>
                        <Text style={{ color: 'white' }}>{item.category_name}</Text>
                    </View>
                    <View style={style.iconContainner}>
                        <Icon
                            name={geticon}
                            style={{ fontSize: 12, paddingRight: 5 }}
                        />
                    </View>
                </View>
                <View style={{ width: '65%', alignSelf: 'center', borderBottomColor: 'white', borderBottomWidth: 2 }}></View>
            </TouchableOpacity>
            <View style={[style.submenues, { height: layoutHeight }]}>
                <View style={{ height: 5, width: '100%' }}></View>
                {
                    item.subCategory[0].val.map((item, key) => (
                        <View key={key}>
                            <TouchableOpacity onPress={() => navigation.navigate(screenName(item, key))}>
                                <Text style={style.innerText}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>

        </View>
    )
}
const DrawerDataMap = () => {

    const [multiselect, setmultiselect] = useState(false)
    const [listDataSource, setListDataSource] = useState(CONTENT)

    const updatLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiselect) {
            array[index]['isExpended'] = !array[index]['isExpended'];
        } else {
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpended']) = !array[placeindex]['isExpended']
                    : (array[placeindex]['isExpended']) = false
            )
        }
        setListDataSource(array)
    }
    return (
        <View>
            <View>
                {/* <TouchableOpacity
                    onPress={() => setmultiselect(multiselect)}>
                    <Text>
                        {
                            multiselect
                                ? 'Enable Single\n Expand'
                                : 'Enable Multiple\n Expand'
                        }
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView>
                {
                    listDataSource.map((item, key) => (
                        <ExpandebleComponent
                            key={item.category_name}
                            item={item}
                            onClickFunction={() => {
                                updatLayout(key)
                            }}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({

    expandBtn: {
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgcontainner: {
        width: '15%',
    },
    textContainner: {
        width: '77%',
    },
    iconContainner: {
        width: '8%',
    },
    submenues: {
        overflow: 'hidden',
        backgroundColor: '#c6cbef',
    },
    innerText: {
        textTransform: "uppercase",
        paddingVertical: 5,
        marginLeft: '20%'
    }

});

export default DrawerDataMap