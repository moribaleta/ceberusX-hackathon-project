
class NavProps {
  navigation
}



export function getSampleTrainingModule(){
  var items = []
  for(var i = 0; i < 10; i++) {

    let module = TrainingModule()
    module.id           = i+""
    module.name         = "training name-" + i
    module.type         = "maid"
    module.createdby    = "user"
    module.imageUrl     = "https://images.halloweencostumes.com/products/41303/1-2/womens-traditional-maid-plus-size-costume.jpg"
    module.description  = "training module for name"
    items.push(module)
  }
  return items
}

export class TrainingModule {
  id
  name
  type
  createdby
  imageUrl
  description
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
  createddate
}

class ExamEntry {
  id
  type 
  options = []
  labelname
  value
}


examentry = {
  id : "",
  examid: "",
  grade: "",
  examdate :Date
}

type = ["text","dropdown"]

exam = {
  id: "",
  employeer_id : "",
  exam_date : Date,
  entries : [
    {
      id: "",
      type: "",
      options : [],
      labelname: "",
      value : ""
    }
  ],
  createddate : Date
}