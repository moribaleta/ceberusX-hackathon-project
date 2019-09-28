
class NavProps {
  navigation
}


class AppState {
  item
}

export var appState = new AppState()


export function getSampleTrainingModule() {
  var items = []

  /* for(var i = 0; i < 10; i++) {


    
    
    items.push(module)
  } */

  let welding = {}
  welding.id = "1"
  welding.name = "Welding 1"
  welding.type = "Welding"
  welding.createdby = "user"
  welding.imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
  welding.description = "basic welding continuing education unit professional development course"
  welding.submodules = ["https://drive.google.com/file/d/1RZ7NrwmBq55MWhe2NsXbLLtkMkEAo3gd/view?usp=sharing", "https://drive.google.com/file/d/1iLiMO4nyRoAWGKGrfRMoL7Ph7XLRCBpW/view?usp=sharing"]

  let maid = {}
  maid.id = "2"
  maid.name = "Housekeeping"
  maid.type = "Housekeeping"
  maid.createdby = "user"
  maid.imageUrl = "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
  maid.description = "Perform any combination of light cleaning duties to maintain private households or commercial establishments, such as hotels and hospitals, in a clean and orderly manner. Duties may include making beds, replenishing linens, cleaning rooms and halls, and vacuuming."
  maid.submodules = ["https://drive.google.com/file/d/157jDEKnzgI-ysW259H_usV3uXWSlscKP/view?usp=sharing", "https://drive.google.com/file/d/1qLrt6iRbwQi8ynVGF9P2RNo0yFF5MnBY/view?usp=sharing"]

  items.push(welding)
  items.push(maid)

  console.log(items)
  return items
}

export class TrainingModule {
  id
  name
  type
  createdby
  imageUrl
  description
  submodules = []
}

export class TrainingSubmodule {
  id
  parentid
  name
  description
  instructions = []
}

export class Employee {
  id
  firstname
  lastname
  birthdate //date
  address //street name, barangay
  email
  status // pending, available, employed, idle
  description //
  jobdescription //maid, janitor ....
  registrationdate //Date
  certifications = [] //url
  employers = [] //employer id
}

export class Employer {
  id
  name
  contactinfo
  email
  address
  date
}

export class ExamEntry {
  id
  examid
  grade
  examdate
}

export class Exam {
  id
  employeer_id
  exam_date
  entries = []
  imageUrl
  createddate
}

class ExamField {
  id
  type
  options = []
  labelname
  value
}


examentry = {
  id: "",
  examid: "",
  grade: "",
  examdate: Date
}

type = ["text", "dropdown"]

exam = {
  id: "",
  employeer_id: "",
  exam_date: Date,
  entries: [
    {
      id: "",
      type: "",
      options: [],
      labelname: "",
      value: ""
    }
  ],
  createddate: Date
}

export function getPreExam() {
  let exam = {
    id: "0",
    employer_id: "Pre Exam",
    exam_date: new Date(),
    entries: [
      {
        id: "3",
        type: "text",
        options: [],
        labelname: "1. Write this number in words 157802 =",
        value: ""
      },
      {
        id: "4",
        type: "text",
        options: [],
        labelname: "2. What numbers are in between 19 and 29?",
        value: ""
      },
      {
        id: "5",
        type: "text",
        options: [],
        labelname: "3. Write this word in numbers, Three hundred  sixty nine =",
        value: ""
      },

      {
        id: "6",
        type: "dropdown",
        options: ["a.Throw it to the river", "b.Make it as a pot for a plant or flower", "c. Pour it with water and put a trash"],
        labelname: "4. What is the best thing to do to an empty can of milk?",
        value: ""
      },

      {
        id: "7",
        type: "dropdown",
        options: ["a. be", "b. is", "c. has", "d. have"],
        labelname: "5. Vian __ tired.",
        value: ""
      }
    ],
    createddate: new Date(),
    description: "This pre-examination will determine what are those jobs that are fit for your skillsets. Exam now and start finding the right employer for you.",
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  }
  return exam
}

export function getSampleExamModule() {
  var items = []
  for (var i = 0; i < 3; i++) {

    let exam = {
      id: i + "",
      employer_id: "HouseKeeping - " + (i+1),
      exam_date: new Date(),
      entries: [
        {
          id: "8",
          type: "text",
          options: [],
          labelname: "1. What are some of the things you do in the house to keep it clean?",
          value: ""
        },
        {
          id: "9",
          type: "text",
          options: [],
          labelname: "2. What is your strength as a good domestic helper?",
          value: ""
        },
        {
          id: "10",
          type: "text",
          options: [],
          labelname: "3. What type of kitchen appliances do you know how to use?",
          value: ""
        },

        {
          id: "11",
          type: "text",
          options: [""],
          labelname: "4. What are some of the things you do in the kitchen to keep it clean?",
          value: ""
        },

        {
          id: "12",
          type: "text",
          options: [""],
          labelname: "5. If the president was visiting your house. What is the best meal you would cook and serve him?",
          value: ""
        }
      ],
      createddate: new Date(),
      description: "This exam is for Housekeeping",
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }

    items.push(exam)
  }
  console.log(items)
  return items
}
