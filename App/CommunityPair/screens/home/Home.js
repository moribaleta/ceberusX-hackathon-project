import React, { Component } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

import TutorialList from './TutorialList'
import ExamList from '../exams/ExamList'
import ExamView from "../exams/ExamViewer";
import { getSampleExamModule } from "../../utilities/utilities";

export default class Home extends Component{

  render(){
    return(
      <ExamView item={getSampleExamModule()[0]}/>
    )
  }

}