var mp4Controllers=angular.module("mp4Controllers",["angular-parallax"]);mp4Controllers.controller("FirstController",["$scope","CommonData",function($scope,CommonData){$scope.data="",$scope.displayText="",$scope.setData=function(){CommonData.setData($scope.data),$scope.displayText="Data set"}}]),mp4Controllers.controller("SecondController",["$scope","CommonData",function($scope,CommonData){$scope.data="",$scope.getData=function(){$scope.data=CommonData.getData()}}]),mp4Controllers.controller("AboutController",["$scope","CommonData","$route","$http","$window",function($scope,CommonData,$route,$http,$window){$scope.user={},$scope.email="",$scope.message="",console.log("email"),console.log($scope.email),$scope.url="feedback.php",$scope.update=function(new_user){function showToast(new_user){new_user.email&&new_user.name&&new_user.message&&Materialize.toast("Message received!",4e3)}console.log(new_user),showToast(new_user),$scope.formData=new_user,$http({method:"POST",url:"feedback.php",data:$.param($scope.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(data){console.log(data),data.success?console.log("yo"):console.log("nah")})},$scope.getData=function(){$scope.data=CommonData.getData()}}]),mp4Controllers.controller("MyMusicController",["$scope","CommonData","$http",function($scope,CommonData,$http){$scope.data="",$scope.getData=function(){$scope.data=CommonData.getData()},$http.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=sopsmusic&limit=1&api_key=f6c0e34e9d8209c4e40094346e8404be&format=json").success(function(data){console.log("1 song"),$scope.songs=data.recenttracks.track,console.log($scope.songs)}),$http.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=sopsmusic&limit=20&api_key=f6c0e34e9d8209c4e40094346e8404be&format=json").success(function(data){console.log("feed"),console.log(data.recenttracks.track[0]),data.recenttracks.track.splice(0,1),$scope.feed=data.recenttracks.track,console.log("mod feed"),console.log(data.recenttracks.track[0])}),$scope.checkImage=function(imageVal){return void 0==imageVal||""==imageVal?!0:!1}}]),mp4Controllers.controller("BirthdayController",["$scope","$http","$window",function($scope,$http,$window){function process_csv(allText){for(var record_num=2,allTextLines=allText.split(/\r\n|\n/),entries=allTextLines[0].split(","),birthdayDict=(entries.splice(0,record_num),{}),i=1;i<allTextLines.length;i++){var thisValue=allTextLines[i],thisValue=thisValue.split(","),name=thisValue[0],bday=thisValue[1];birthdayDict[name]=bday}console.log("dict"),console.log(birthdayDict)}$.get("./data/birthdays/birthdays.txt",function(data){process_csv(data)},"text")}]),mp4Controllers.controller("ProjectsController",["$scope","$http","$window",function($scope,$http,$window){}]),mp4Controllers.controller("LlamaListController",["$scope","$http","Llamas","$window",function($scope,$http,Llamas,$window){Llamas.get().success(function(data){$scope.llamas=data})}]),mp4Controllers.controller("SettingsController",["$scope","$window",function($scope,$window){$scope.url=$window.sessionStorage.baseurl,$scope.setUrl=function(){$window.sessionStorage.baseurl=$scope.url,$scope.displayText="URL set"}}]);