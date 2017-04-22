function AboutMeController(){

  let vm = this;

  vm.nextName = nextName;
  vm.lastName = lastName;

  vm.names = ["Front-End Developer", "Uncle", "Dog Lover", "Longboarder", "Gamer", "Creator", "YouTuber", "Tyler Laurenceau"];
  vm.nameTracker = 0;
  vm.currentName = vm.names[vm.nameTracker];

  function nextName(){
    vm.nameTracker = vm.nameTracker + 1;
    vm.currentName = vm.names[vm.nameTracker]
    console.log(vm.nameTracker)
    if(vm.nameTracker > 7){
      vm.nameTracker = 0;
      vm.currentName = vm.names[vm.nameTracker]
    }
  }

  function lastName(){
    vm.nameTracker = vm.nameTracker - 1;
    vm.currentName = vm.names[vm.nameTracker]
    console.log(vm.nameTracker)
    if(vm.nameTracker < 0){
      vm.nameTracker = 7;
      vm.currentName = vm.names[vm.nameTracker]
    }
  }
}

export default AboutMeController;
