# Introduction

The Transportation Management System (TMS) Dashboard is a web application built using HTML, CSS, JavaScript, React, Redux, and React-Bootstrap. It provides a user-friendly interface to manage shipments assigned to different carriers. This documentation provides an overview of the project, installation instructions, and usage guidelines.

## Demo
You can view a live demo of this application
https://tms-react-redux.netlify.app/shipments

## Getting Started
Clone the repository to your local machine:
```sh
https://github.com/geoelectrof/tms-dashboard
```
Install the dependencies and start the server.
```sh
cd tms-dashboard
npm install
npm run dev
```
This will start the development server and open the application in your default browser at http://localhost:5173/.

## Usage 
Once the Transportation Management System Dashboard is running, you can perform the following actions:

1.  View Shipments:
    -   On the dashboard, you will see a list of shipments with their carrier names, estimated delivery dates, current status etc.

2.  Filter Shipments:
    -   You can filter the shipments based on their carrier names and status.
    
4.  Add New Shipment:
    
    -   The dashboard provides a form to add a new shipment.
    -   Enter the carrier name, delivery date,  status etc in the respective fields and click the "Add Shipment" button.
    -   The new shipment will be added to the list of shipments and displayed on the dashboard.
5.  Edit Shipment:
    
    -   Each shipment in the table has an "Edit" button.
    -   Clicking on the "Edit" button opens a modal with the shipment details.
    -   Update the necessary fields and click the "Save" button to save the changes.
    -   The updated shipment details will be reflected in the table.
7.  Delete Shipment:
    
    -   Each shipment in the table has a "Delete" button.
    -   Clicking on the "Delete" button prompts for confirmation.
    -   Confirming the deletion removes the shipment from the list.
8.  Responsive Design:
    
    -   The Transportation Management System Dashboard is designed to be responsive, adapting to different screen sizes and devices.
    -   The layout and components are optimized for desktop, tablet, and mobile views.
