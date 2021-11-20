import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {VictoryPie} from 'victory-native';

import {Svg} from 'react-native-svg';

import {COLORS, FONTS, SIZES} from '../constants';

const Chart = props => {
  const [categories, setCategories] = useState(props.data);
  const [viewMode, setViewMode] = useState('chart');
  const [selectedCategory, setSelectedCategory] = useState(null);

  function renderCategoryHeaderSection() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* Button */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomColor:
                viewMode == 'chart' ? COLORS.secondary : COLORS.white,
              borderBottomWidth: 4,
              padding: 5,
              margin: 10,
            }}
            onPress={() => setViewMode('chart')}>
            <Text style={{...FONTS.h3}}>Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomColor:
                viewMode == 'list' ? COLORS.secondary : COLORS.white,
              borderBottomWidth: 4,
              padding: 5,
              margin: 10,
            }}
            onPress={() => setViewMode('list')}>
            <Text style={{...FONTS.h3}}>Spends</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderIncomingExpenses() {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];

    const renderItem = ({item, index}) => (
      <View
        style={{
          width: 250,
          marginRight: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        {/* Expense Description */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.padding,
          }}>
          {/* Title and description */}
          <Text style={{...FONTS.h2, color: selectedCategory.color}}>
            {item.date}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              flexWrap: 'wrap',
              color: COLORS.darkgray,
              paddingBottom: 20,
            }}>
            {item.type}
          </Text>
        </View>

        {/* Price */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Total {item.value.toFixed(2)} USD
          </Text>
        </View>
      </View>
    );

    return (
      <View>
        {allExpenses.length > 0 && (
          <FlatList
            data={allExpenses}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {allExpenses.length == 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
            }}>
            <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
          </View>
        )}
      </View>
    );
  }

  function processCategoryDataToDisplay() {
    let chartData = categories.map(item => {
      let expenses = item.expenses.map(a => a.value);
      var total = expenses.reduce((a, b) => a + (b || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: expenses.length,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter(a => a.y > 0);

    // Calculate the total expenses
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    // Calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map(item => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  }

  function setSelectCategoryByName(name) {
    let category = categories.filter(a => a.name == name);
    setSelectedCategory(category[0]);
  }

  function renderChart() {
    let chartData = processCategoryDataToDisplay();
    let colorScales = chartData.map(item => item.color);
    let totalExpenseCount = chartData.reduce(
      (a, b) => a + (b.expenseCount || 0),
      0,
    );

    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Svg
          width={SIZES.width}
          height={SIZES.width / 2.2}
          style={{width: '100%', height: 'auto'}}>
          <VictoryPie
            startAngle={90}
            endAngle={-90}
            standalone={false} // Android workaround
            data={chartData}
            labels={datum => `${datum.y}`}
            radius={({datum}) =>
              selectedCategory && selectedCategory.name == datum.name
                ? SIZES.width * 0.38
                : SIZES.width * 0.38 - 10
            }
            innerRadius={80}
            labelRadius={({innerRadius}) =>
              (SIZES.width * 0.6 + innerRadius) / 2.5
            }
            style={{
              labels: {fill: 'white', ...FONTS.body3},
              parent: {
                ...styles.shadow,
              },
            }}
            width={SIZES.width}
            height={520}
            colorScale={colorScales}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: 'labels',
                        mutation: props => {
                          let categoryName = chartData[props.index].name;
                          setSelectCategoryByName(categoryName);
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </Svg>
        <View style={{position: 'absolute', top: '75%', left: '43%'}}>
          <Text style={{...FONTS.h1, textAlign: 'center'}}>
            {totalExpenseCount}
          </Text>
          <Text style={{...FONTS.body3, textAlign: 'center'}}>Expenses</Text>
        </View>
      </View>
    );
  }

  function renderExpenseSummary() {
    let data = processCategoryDataToDisplay();

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: SIZES.base,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name == item.name
              ? item.color
              : COLORS.white,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectCategoryByName(categoryName);
        }}>
        {/* Name/Category */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : item.color,
              borderRadius: 5,
            }}
          />

          <Text
            style={{
              marginLeft: SIZES.base,
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{padding: 12}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.box}>
        {/* Category Header Section */}
        {renderCategoryHeaderSection()}

        <View>
          {viewMode == 'list' && (
            <View>
              {renderIncomingExpenses()}
              {renderExpenseSummary()}
            </View>
          )}
          {viewMode == 'chart' && (
            <View>
              {renderChart()}
              {renderExpenseSummary()}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    padding: 4,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Chart;
