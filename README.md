# Requirements Helper

## Launching dev application

Requirement Helper is a react projet, therefore you have to :

- Clone the repository
- Run **npm install**
- Run **npm start**
- Open [http://localhost:3000/](http://localhost:3000/)

## Downloading CSV files

Download our requirements file :

- Go to : 
  > [https://docs.google.com/spreadsheets/d/1NO4hheidI9EHcjlyHYUlesp70QjzPgsnE8K1dB3Gkew/edit#gid=0](https://docs.google.com/spreadsheets/d/1NO4hheidI9EHcjlyHYUlesp70QjzPgsnE8K1dB3Gkew/edit#gid=0)

- Be sure the current sheet is **Requirements**
- Click file, download, download in csv.

You can then download the relations using the same steps as the requirements, this time the sheet name is **Relations**.

## Opening the CSV files

- Once you have run **npm start**, go to http://localhost:3000/.
- Click on **choose a file** on the left side of the screen, on the panel whith **Select Requirements** written on it
- Select the requirements CSV file you have downloaded.

You can import the relations the same way as requirements, excepts with the **Select Relation** panel this time.

## See all relations

When clicking on **Relation** in the header, you are presented with all existing relations binding the requirements. To go back to the requirements list, click on the **Home** link in the header.

## Creating relations

Clicking on a requirement will take you to a page where you can create new relations. If a relation already exist with the selected requirements, the drop down selection will be pre-filled.
If you want to make a new relation :

- Select the relation type via the dropdown
- Select the requirement it is in relation with
- Click on the **make relation** button

## Export a CSV file

You can export either the requirements or the relations in CSV. To do that, click on the link in the right panel, named **Download Requirements CSV** or **Download Relations CSV**.
