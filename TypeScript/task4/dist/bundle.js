/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    Subjects.cpp = new Cpp();
    Subjects.java = new Java();
    Subjects.react = new React();
    Subjects.cTeacher = {
        firstName: "Guillaume",
        lastName: "Salva",
        experienceTeachingC: 10
    };
    console.log("C++");
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
})(Subjects || (Subjects = {}));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFFM0MsSUFBVSxRQUFRLENBZWpCO0FBZkQsV0FBVSxRQUFRO0lBQ0QsWUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsYUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDbEIsY0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFFcEIsaUJBQVEsR0FBWTtRQUM3QixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsT0FBTztRQUNqQixtQkFBbUIsRUFBRSxFQUFFO0tBQzFCLENBQUM7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLFlBQUcsQ0FBQyxVQUFVLENBQUMsaUJBQVEsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLENBQUMsRUFmUyxRQUFRLEtBQVIsUUFBUSxRQWVqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJqZWN0cy9UZWFjaGVyLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL1N1YmplY3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvQ3BwLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL1JlYWN0LnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL0phdmEudHNcIiAvPlxuXG5uYW1lc3BhY2UgU3ViamVjdHMge1xuICAgIGV4cG9ydCBjb25zdCBjcHAgPSBuZXcgQ3BwKCk7XG4gICAgZXhwb3J0IGNvbnN0IGphdmEgPSBuZXcgSmF2YSgpO1xuICAgIGV4cG9ydCBjb25zdCByZWFjdCA9IG5ldyBSZWFjdCgpO1xuXG4gICAgZXhwb3J0IGNvbnN0IGNUZWFjaGVyOiBUZWFjaGVyID0ge1xuICAgICAgICBmaXJzdE5hbWU6IFwiR3VpbGxhdW1lXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIlNhbHZhXCIsXG4gICAgICAgIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiQysrXCIpO1xuICAgIGNwcC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbiAgICBjb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuICAgIGNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xufSJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=