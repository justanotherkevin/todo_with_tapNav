import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
// import { connect } from 'react-redux';
import Calendar from 'react-native-calendar';
import moment from 'moment';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/CalendarScreenStyle'

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class CalendarScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
      eventDates: [
        '2017-09-01',
        '2017-09-02',
        '2017-09-03',
        '2017-09-04'
      ],
    };
  }
  render () {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          showEventIndicators
          eventDates={this.state.eventDates}
          // eventDates= {[
          //   '2017-09-01',
          //   '2017-09-02',
          //   '2017-09-03',
          //   '2017-09-04'
          // ]}
          // events={[
          //   { date: '2017-09-04' },
          //   { date: '2017-09-05' }
          // ]}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={ (date) => this.setState({ selectedDate: date }) }
          // onDateLongPress={(date) => this.setState({ selectedDate: date })}
          // onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          // onTouchNext={(e) => console.log('onTouchNext: ', e)}
          // onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          // onSwipeNext={(e) => console.log('onSwipeNext', e)}
          weekStart={0}
          customStyle={customStyle}
        />
        <Text>Selected Date: edit for git hub {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>
    )
  }
}
const customStyle = {
    controlButtonText: {
     color: 'rgb(71, 183, 203)',
    },
    currentDayCircle: {
      backgroundColor: 'orange',
    },
    currentDayText: {
      color: 'pink',
    },
    // eventIndicatorFiller: {
    //   backgroundColor: 'blue',
    //   width: 10,
    //   height: 10,
    // },
    hasEventCircle: {
      backgroundColor: 'powderblue'
    },
 }
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)
