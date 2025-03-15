import { steps } from "framer-motion";
import { text, title } from "framer-motion/client";
import sqlAnalysis from "./assets/sql_analysis.png";
import awsIntegration from "./assets/aws_integration.png";

const content = {
  title: "Exploring the Evolution and Characteristics of Exoplanets",
  subtitle:
    "A Data-Driven Analysis of Exoplanet Discoveries, Characteristics, and Habitability Potential",
  author: "Mohan Silambarasu Elangkumaran",
  date: "December 2024",

  about: {
    title: "About Me",
    insights: [
      "I am Mohan Silambarasu Elangkumaran, a Master’s student in Applied Information Technology at George Mason University, specializing in Data Analytics and Intelligence Methods. My passion lies in leveraging data science and analytics to uncover meaningful insights from complex datasets. As part of my AIT 580: Big Data to Information course (where I earned a 4.0 GPA), I conducted an in-depth Exoplanet Data Analysis using NASA’s Exoplanet Archive (36,000+ entries).",
      "The goal was to explore exoplanet discoveries, analyze trends, and identify potentially habitable planets using advanced data analysis techniques. By leveraging my skills in Python, R, SQL, and AWS, I was able to clean, process, and visualize large-scale astronomical datasets, uncovering meaningful insights into the evolution of planetary detection. Through this project, I aim to bridge the gap between data science and space exploration by demonstrating how big data techniques can revolutionize astronomy. The goal was to explore exoplanet discovery trends, analyze detection methods, and identify potentially habitable planets.",
      "With my background in software development, data engineering, and analytics, I am constantly seeking opportunities to work on cutting-edge AI, machine learning, and data science projects, whether in academia or industry. This project highlights how big data and analytics can revolutionize astronomy by improving exoplanet detection and habitability assessments. Moving forward, I aim to integrate machine learning models for more advanced classification and prediction in planetary science.",
    ],
  },

  abstract: {
    title: "Abstract",
    text: "This study dives into the exciting field of exoplanet discovery, analyzing a dataset to uncover trends, relationships, and insights into planetary characteristics. The goal is to explore how discovery methods have evolved, identify correlations between planetary attributes like distance, mass, and density, and pinpoint potentially habitable exoplanets based on their equilibrium temperatures. To achieve this, I used tools like Python, R, MySQL, and AWS services to clean, analyze, and visualize the data. By combining SQL for statistical queries with cloud-based databases, the research highlights the importance of using advanced analytics in astronomy. Beyond presenting tables and graphs, the study interprets the findings to provide meaningful insights into how exoplanet discoveries have progressed and what makes certain planets stand out as potentially habitable. This paper not only showcases the power of data analysis but also emphasizes its role in deepening our understanding of the universe.",
  },

  introduction: {
    title: "Introduction",
    text: "The discovery of exoplanets has transformed our knowledge of planetary systems, expanding our understanding of the universe. From the first exoplanet detection in the 1990s to the thousands discovered since then, advancements in technology have been central to this progress. In this project, I analyzed a detailed dataset of exoplanets to answer key questions about their discovery and characteristics. The study focuses on trends in how exoplanets are discovered, the relationship between their distance and discovery methods, and the identification of potentially habitable planets based on temperature. By using Python, R, MySQL, AWS RDS, AWS Glue Data Brew, I combined data cleaning, analysis, and visualizations to uncover meaningful insights. This research aims to bridge the gap between data analytics and planetary science, offering a new perspective on exoplanet discoveries.",
  },

  literatureReview: {
    title: "Literature Review",
    text: "The exploration of exoplanets has seen significant advancements through various data-driven and technological approaches, as highlighted in several key studies. The study 'The Exploration of Habitable Exoplanets using Data Mining Algorithms and Data Manipulation' [1] focused on applying data mining techniques like deduplication and Circumstellar Habitable Zone (CHZ) calculations, alongside algorithms such as K-Nearest Neighbor (KNN). By using the NASA Exoplanet Archive dataset [4], the researchers identified planets with potential habitability, such as GJ 143b and L 98-59c, emphasizing the importance of mass, density, and radius in determining habitability. This aligns with my third research question regarding the relationship between mass, density, and radius in assessing habitability. \n\n Another study, 'Exoplanet Detection Methods' [2], delves into the evolution of discovery methods such as radial velocity, transit photometry, and direct imaging. It discusses notable discoveries, including 51 Pegasi b and the HR 8799 planetary system, highlighting how advancements in detection techniques have enabled exploration across varying distances. This study provides foundational insights into my research questions about the evolution of discovery methods and their correlation with technological advancements and planetary distances. \n\n Finally, 'Identifying Exoplanets with Machine Learning Methods: A Preliminary Study' [3] explored supervised and unsupervised machine learning techniques to identify exoplanets using the NASA Exoplanet Archive dataset [4]. The use of models like Naïve Bayes and decision trees achieved high classification accuracy, while unsupervised learning methods examined the relationships between mass, radius, and density. This approach not only demonstrated the efficiency of machine learning over traditional methods but also supported my research question on how technological advancements contribute to exoplanet discovery. Collectively, these studies reinforce the importance of leveraging data-driven methods and evolving technologies to understand exoplanet characteristics and their potential habitability.",
  },

  dataset: {
    title: "Dataset Overview",
    text: "The selected dataset contains details of various exoplanets discovered over a period of 1992 to 2024, including planetary characteristics, discovery methods, and other attributes that can be used to detect potential habitable planets. The dataset contains 36,557 entries, covering multiple fields such as planetary mass, radius, density, distance, discovery year, equilibrium temperature, orbital period, and the number of stars and moons associated with each system. \n\n This exoplanet dataset consists of all data types in NOIR: Nominal, Ordinal, Interval, and Ratio. The below Table 1 provides a classification of each column in the cleaned dataset according to these four data types. From Table 1, it is evident that columns like Planet Name, Discovery Method, Discovery Instrument, Discovery Facility, and Discovery Locale follow the Nominal data type, representing categorical data without any specific order. The Ordinal data type includes the Serial Number column, which follows a categorical order. The Interval data type represents columns such as Discovery Year and Equilibrium Temperature, which include intervals but lack an absolute zero point. The Ratio columns contain data that can be classified into ratios, such as Distance, Planet Mass, and Planet Radius. \n\n This dataset is extracted from NASA’s Exoplanet Archive [4], as it provides accurate information on exoplanets discovered beyond our solar system, making this an ideal dataset to address the research questions posed.",
    datasetLink: "https://exoplanetarchive.ipac.caltech.edu",
  },

  researchQuestions: {
    title: "Research Questions",
    questions: [
      "1️⃣ How has the discovery of exoplanets evolved over the years, and are methods linked to technical advancements?",
      "2️⃣ Is there any relation between the distance of exoplanets from Earth and their discovery methods or years?",
      "3️⃣ How does the mass of an exoplanet influence its density and radius across various planets, and which exoplanets fall within the habitable equilibrium temperature range (175K – 270K)?",
    ],
  },

  toolsAndMethods: {
    title: "Tools and Methods",
    text: "In this project, Python and R were used for cleaning, analysis, and visualization of the exoplanets dataset. Python libraries such as matplotlib, pandas, numpy, and seaborn, along with R libraries like dplyr and ggplot2, were used extensively in understanding multiple trends and patterns across various exoplanets. \n\n For descriptive analysis, I worked with MySQL. I created a database schema in a MySQL database, loaded the dataset, and ran queries to explore and understand the data. \n\n To efficiently handle this large dataset of exoplanets discovered so far, I used AWS services. With the help of AWS, I uploaded this large dataset into an S3 bucket, set up an RDS database, and used an EC2 instance to integrate MySQL with AWS. This setup allowed me to run complex queries and explore the data seamlessly. The uploaded S3 bucket dataset was then used for AWS Glue Data Brew analysis, which provided column statistics and summaries. The combination of these tools enabled me to analyze this complex dataset and extract meaningful insights to address my research questions.",
  },

  analysis: [
    {
      title: "Descriptive Statistics Using SQL",
      description:
        "In this project, SQL is used to analyze the exoplanet dataset, and various queries are run to explore the planets. Initially, existing databases are checked in SQL, and then a new database, `AIT580PROJECT`, is created for this project. After creating the database, a new schema along with column names and data types is defined in the `planets` table. Once the initial setup and schema are completed, the CSV dataset is loaded using the `LOAD DATA LOCAL INFILE` command into the `planets` table.",
      steps: [
        "Created a MySQL database (`AIT580PROJECT`) and structured the schema for exoplanet data.",
        "Defined columns and data types in the `planets` table.",
        "Loaded the dataset into MySQL using `LOAD DATA LOCAL INFILE`.",
      ],
      insights: [
        "Total number of exoplanets discovered by each instrument: A SQL query was run to analyze exoplanets discovered by various instruments. The Kepler CCD Array was the most vital instrument, responsible for discovering 28,817 planets. This was followed by the TESS CCD Array with 1,498 discoveries, the iKon-L CCD Camera with 1,148 discoveries, and other instruments contributing to 660 discoveries. The HIRES spectrometer was used the least for discovering exoplanets.",
        "Finding the earliest discovered exoplanets: An SQL query identified the earliest discovered exoplanets, which were found in 1992. These planets, PSR B1257+12 c and PSR B1257+12 d, were detected using the Pulsar Timing method.",
        "Finding the latest discovered exoplanets: A SQL query was run to obtain the latest exoplanet discoveries. In 2024, 428 new exoplanets were discovered. The methods used in 2024 included Imaging, Radial Velocity, Transit, Microlensing, Pulsar Timing, and Transit Timing Variations.",
      ],
      image: sqlAnalysis,
    },
    {
      title: "Exploratory Analysis and Visualization Using Python",
      description:
        "Python was used for cleaning, statistical analysis, and visualization of exoplanet data.",
      steps: [
        "Data Cleaning in Python",
        "Summary Statistics of the Exoplanet Dataset in Python",
        "How has the discovery of exo- planets evolved over the years",
      ],
      insights: [
        "Data Cleaning in Python: After Setting up the initial librarys , the dataset is then cleaned and transformed using Python. Now, The dataset loaded in the pandas data frame is then cleaned by inserting serial number , dropping duplicated , unwanted columns. Now the dataset is cleaned , ensures accurate dataset with appropriate columns , without duplicates and filtering out redundant entries.",
        "Summary Statistics of the Exoplanet Dataset: Using python, a summary statistics is provided for all the 36,557 exoplanets which is composed of multiple columns. From the below summary it is clear that most of the exoplanets discovered fall between 1992 and 2024 which peaked in the year 2015. The planets in general have short orbital period less than 10 median days and size of planets are usually around 2.29 Earth Radius. The average equilibrium temperature of exoplanets are around 876 K indicating most of them have a high equilibrium temperature. Along with this, there are extreme planets in the dataset with are very huge and high orbital periods.",
        "Research Question 1: How has the discovery of exo- planets evolved over the years - Uni variate Analysis of Discovery Year : The distribution of planets discovered over each year is a example of univariate analysis. The below Figure displays, the bar graph plotted between the number of planets discovered and the year they were discovered.",
      ],
      graphs: [
        {
          title: "Discovery Trends Over Time",
          description:
            "The number of exoplanet discoveries has increased significantly over time. it is evident that the number of planets discovered over the years has always been increasing where it peaked in the year of 2015 and 2016. This is due to advancements in the latest technology where more advanced methods like Transit have been more commonly used. However, there is a decline in discoveries since 2016 as we could see there is shift towards to those planets which are classified as potential habitable planets.",
          type: "bar",
          dataKey: "count",
          data: [
            { year: 1992, count: 2 },
            { year: 2000, count: 50 },
            { year: 2010, count: 800 },
            { year: 2015, count: 1500 },
            { year: 2020, count: 2000 },
            { year: 2024, count: 2200 },
          ],
        },
      ],
    },
    {
      title: "Exploratory Analysis and Visualization Using R",
      description:
        "R was used for data visualization and statistical interpretation, leveraging `ggplot2` and `dplyr` for advanced graphical representation.",
      steps: [
        "Data Cleaning in R",
        "Summary Statistics in R",
        "Find planets that are having equilibrium temperature in habitable range.",
      ],
      insights: [
        "Data Cleaning in R: Just like Python , the dataset here is also cleaned and transformed using R before performing any operations. Now, The dataset loaded in the R and librares such dplyr , ggplot2 , maps are installed before to help in visualizations and manipulations. Now the CSV file is read into R and then clean by inserting serial number to uniquely identify row. The Unwanted columns are dropped and duplicate rows are removed as well to get the best set of data which result in optimal analysis and visualization.",
        "Summary Statistics in R: Using R, a summary function is used which provides summary statistics for all the 36,557 exoplanets. From the summary it is evident that the statistics work similar using Python as well. The median year of discoveries are around 2016. The maximum value of orbital period is 4,020,000 days which is around 11000 years. The average mass of planet is 171.63 Earth masses. The closest planet discovered is 1.3 parsecs and the longest is around 8800 parsecs.",
        "The below histogram displays the distributions of equilibrium temperature in Kelvin for exoplanets. From the below graph , it is evident that Most of the planets have temperature below 1000k where the peak graph attains at 500 to 800K. This indicates that most of exoplanets are cooler than Earth like temperature.",
      ],
      graphs: [
        {
          title: "Exoplanet Equilibrium Temperature Distribution",
          description:
            "Most exoplanets have temperatures below 1000K, with some in the habitable range (175K - 270K). the habitable temperature which falls between 175K to 270K. This is the temperature where liquid water could potentially exist. However, beyond 1000k, the graph declines reflecting there are very less number of high temperature planets. Overall, the data shows a diverse range in planetary temperatures, with a more focus on cooler planets.These planets are potential candidate for liquid water to exist out of which Kepler-62 e and Kepler- 1652 b are famous ones . Although the temperature does not guarantee any habitability , while this provides a significant list of planets that can be further explored and helps scientist to narrows their research in such planets.",
          type: "bar",
          dataKey: "count",
          data: [
            { temperature: 100, count: 250 },
            { temperature: 500, count: 1700 },
            { temperature: 1000, count: 1300 },
            { temperature: 1500, count: 300 },
            { temperature: 2000, count: 150 },
            { temperature: 2500, count: 10 },
          ],
        },
      ],
    },
    {
      title: "Integration of AWS Cloud Service with SQL Using RDS",
      description:
        "AWS services were used to store and query exoplanet data efficiently, integrating MySQL with Amazon RDS and EC2.",
      steps: [
        "Uploaded the dataset to an Amazon S3 bucket (`ait580exoplanetprojectdataset`).",
        "Launched an AWS EC2 instance to set up a MySQL environment.",
        "Created an Amazon RDS database and executed SQL queries to analyze the dataset.",
      ],
      insights: [
        "2020 recorded the highest number of exoplanet discoveries, followed by 2024. The Transit method remains the dominant discovery method, detecting 32,942 exoplanets. Microlensing and Pulsar Timing methods are primarily used for detecting exoplanets at longer distances.",
        "Count of Planets Discovered Each Year: The below SQL query displays the count of planets that are discovered over time period. It is evident that 2020 had most number of planets discovered which is followed by 2024.",
      ],
      image: awsIntegration,
    },
  ],

  limitations: {
    title: "Limitations",
    text: "The above data exploration and analysis of the exoplanets dataset using Python, R, SQL, and AWS has been very insightful in understanding the scale of discoveries, the most common and least common methods in detecting planets, and identifying planets that fall in the habitable zone based on equilibrium temperature. \n\n Although the dataset is extracted from NASA’s Exoplanet Archive [4], it does contain missing values for some crucial attributes. While the dataset includes planets from vast distances, there may be slight imbalances in attributes such as the number of moons. Another limitation is that the static nature of the dataset might not fully reflect the actual characteristics of planets, as planetary properties can change with new discoveries. \n\n The identification of potentially habitable planets is based solely on equilibrium temperature. While this helps narrow down further research, much more data is required to compile a truly reliable list of habitable exoplanets. The research currently relies on statistical and visualization techniques using Python, R, and SQL. While these methods work well for exploratory analysis, more advanced machine learning techniques could provide a broader and more capable analytical framework. Additionally, the reliance on publicly available datasets limits the comprehensiveness of the analysis. Addressing these limitations in future research could lead to more robust findings.",
  },

  conclusion: {
    title: "Conclusion",
    text: "This research explores various discovered exoplanets using tools like Python, R, SQL, and AWS to analyze a dataset of 36,000 entries. This analysis highlights how various technological advancements have contributed to the discovery of exoplanets. It is evident that the transit method is the most widely used discovery method over time, while the microlensing method is predominantly used for discovering planets at greater distances. The research also establishes the relationship between an exoplanet’s mass, density, and radius. \n\n One of the most important findings is the identification of a list of planets that fall within the habitable equilibrium temperature range, making them potential candidates for sustaining life in the future. \n\n However, there are limitations to this study, such as reliance on public and static datasets. Understanding these limitations is equally important for future explorations. Incorporating advanced machine learning techniques would allow for a deeper and more comprehensive exploration of exoplanets in the future. \n\n Ultimately, this project primarily focuses on data analysis in astronomy, examining and exploring various trends in planets outside our solar system. This analysis helps identify Earth-like exoplanets based on equilibrium temperature, contributing to the ongoing search for habitable worlds beyond our solar system.",
  },

  references: {
    title: "References",
    list: [
      {
        text: "The Exploration of Habitable Exoplanets using Data Mining",
        link: "https://www.academia.edu/49090548/The_Exploration_of_Habitable_Exoplanets_using_Data_Mining_Algorithms_and_Data_Manipulation",
      },
      {
        text: "Exoplanet Detection Methods",
        link: "http://arxiv.org/abs/1210.2471v2",
      },
      {
        text: "Identifying Exoplanets with Machine Learning Methods: A Preliminary Study",
        link: "https://doi.org/10.5121/ijci.2022.110203",
      },
      {
        text: "NASA Exoplanet Archive",
        link: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS",
      },
      {
        text: "Exploring The Habitable Zone for Kepler Planetary Candidates",
        link: "https://doi.org/10.1088/2041-8205/736/2/l25",
      },
    ],
  },
};

export default content;
