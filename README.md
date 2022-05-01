# AI based Product Description Generator
### Taking Cakes as our Product Examples
Using KNN to first classify the product based on the given image, then bringing in openai to get a relevant product description. This repo includes both frontend and backend.

### For the frontend:
Use command 
```
  npx create-react-app <name>
```
and copy paste [App.js](https://github.com/buzo1234/AI-Product-Description/blob/main/Frontend/App.js) and [index.html](https://github.com/buzo1234/AI-Product-Description/blob/main/Frontend/index.html) files from Frontend to your directory

### For the Backend:
I am using Flask to make a Rest API.
It receives image url from frontend and sends back ***Product Description*** and ***Product Name***.

To run the server:
Install necessary modules and, run this command in terminal
```
  python knn.py -d "train/"
```

### Some Images of it working!
![image](https://user-images.githubusercontent.com/44663554/166132539-c9b1f7be-db6a-41fc-a5ef-731e056b49d4.png)
![image](https://user-images.githubusercontent.com/44663554/166132549-190ac5d7-7825-4811-b8ce-6d36c39e688b.png)

