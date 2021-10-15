# Project-1 Reverse Engineer

# photoExpress
photoExpress is a simple image sharing site that allows users to upload image URL's to create a collection to share with other users. 
This app uses mongo to control the databases, node.js as the runtime enviroment, as well as express to be the framework. 
A user can register and then login in the future to add images. The images themselves can be viewed by anyone onthe site 
but only the user that posted the image can make changes or delete the image. 

#User Process
1. Upon loading the website the user will be greeted by an index of the images that have been added so far. 
2. The user will have the option to login or register in the top right corner of the nav bar.
3. If a user clicks the login link and then attempts to login with an username that doesnt exist they will be redirected to the register page.
4. Once a user has registered they will be redirected to the login page where they can login.
5. After a sucessful login the user will returned to the index of images with their username in the top right along with the option to add or logout.
6. If a user clicks on an image in the index they can view the photo individually as well as leave comments on the image.
7. To add an image the user will click on the add photo button in the top right and will be redirected to the add page.
8. At the add page the user will be prompted with inputs for the name of the image as well as the URL and a description.
9. After the user submits the photo will be added to the image database.
10. Now if a user selects a photo they themselves have uploaded they will be able to click the edit button beneath the image and will be redirected to the edit page.
11. On the edit page the user will see the current data for the name, URL, and description of the photo.
12. They can hit the edit button after making changes the cancel button to return to the previous page or the delete button to detele the image.
13. if the image is deleteed they will be returned to the main index page. 
14. The user can finally logout in the upper right hand corner.

#teamMembers
1.Braden Fink
2.Michael Karr
