
# Shape Of Option Generation 

### Authors: Gokul Srinivasan, Jane Acierno, Jonathan Phillips 

### Abstract:
There has been a small but now growing interest in studying decision making in real-world contexts where part of the problem faced by decision makers is to generate candidate options they will actually decide between. While some of this work has employed large decision spaces where options are discrete and valuation is computationally tractable (e.g., chess), very little work has focused on genuinely open-ended decision contexts that more closely mirror mundane real-world decisions. This paper leverages large language models to investigate how people generate options when facing genuinely open-ended problems. Across three experiments, we apply semantic similarity and sentiment analyses to the options that participants sequentially generate for real-world decision problems. We find that the first options generated tend to be sampled from a relatively local region of semantic space and are typically of high value. As additional options are generated, they become increasingly dissimilar and are of lower value. These patterns held both at the level of individual option generation trajectories within a given participant and at the level of individual differences across participants.

## Repository Structure:
### File Tree
|-- Analysis
|   |-- Model
|   |-- Previous_Code
|   |-- Study_1
|   |-- Study_2
|   |-- Study_3
|   |-- Study_4
|   |-- Study_5
|-- Data
|   |-- Misc
|   |-- Study1
|   |-- Study2
|   |-- Study3
|   |-- Study4
|   |-- Study5
|-- README.md
|-- Studies
    |-- Study2
    |-- Study5
    
### Analysis 
The Analysis folder contains all of the scripts for data analysis performed on data collected from studies. Each subfolder houses the analysis scripts for each study. The Model folder stores the custom sentiment model used during sentiment analysis. 

### Data 
The Data folder contains the data collected from each study, alongside supplementary files used in data analysis. Each subfolder contains the data from each study. 

### Studies 
The Studies folder contains the code used for the studies 2 and 5. Studies 1, 3, and 4 were either 1) produced on a third-party survey platform (e.g., Qualtrics), or 2) lack accessible source code. 

### Anaconda Environment 
The env.yml file contains the list of dependices used for data analysis. 

## Experiment List and Description:
### Total Semantic Exploration vs Average Sentiment
### Total Semantic Exploration vs Generation Number
### Semantic Dissimilarity vs Generation Number
### Subjective Goodness vs Generation Number
### Generation Sentiment vs Generation Number
### Generation Concreteness vs Generation Number
### Concreteness vs Semantic Relatedness
### Semantic Exploration vs Average Concreteness
### Generation Concreteness vs Subjective Score
### Generation Concreteness vs Generation Sentiment

