function AppCtrl($scope){
    console.log("Hello from Controller")

    person1 = {
        name:'Jim',
        email:'jim@gmail.com',
        number:"(111) 111-1111"
    };
    person2 = {
        name:'Tim',
        email:'tim@gmail.com',
        number:"(222) 222-211"
    };
    person3 = {
        name:'Mary',
        email:'mary@gmail.com',
        number:"(111) 333-1111"
    };

    var contactList = [person1, person2, person3]
    $scope.contactList = contactList
}