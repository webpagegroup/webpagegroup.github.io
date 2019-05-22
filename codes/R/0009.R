data1 <- read.csv("rrrhighnightallnew.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(average ~ densityairbnb, data = data1)
summary(model1)
x<- data1$densityairbnb
y<- data1$average
plot(x,y,col = "orange",main = "average housing price & type of over 30 minimun nights airbnb density Regression",
     abline(lm(y~x)),cex = 1,pch = 18,xlab = "type of private density",ylab = "average housing price")


data1 <- read.csv("rrrlownightallnew.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(average ~ densityairbnb, data = data1)
summary(model1)
x<- data1$densityairbnb
y<- data1$average
plot(x,y,col = "orange",main = "average housing price & type of less 30 minimun nights airbnb density Regression",
     abline(lm(y~x)),cex = 1,pch = 18,xlab = "type of private density",ylab = "average housing price")


data1 <- read.csv("rrrloghighnightall.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(LOG.average. ~ logdensityairbnb, data = data1)
summary(model1)

data1 <- read.csv("rrrloglownightall.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(LOG.average. ~ logdensityairbnb, data = data1)
summary(model1)

data2 <- read.csv("log(average_density).csv")
names(data2)
summary(data2)
model2 <- lm(average ~ logdensityairbnb, data = data2)
summary(model2)

data1 <- read.csv("average_density.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(average ~ densityairbnb, data = data1)
summary(model1)
x<- data1$densityairbnb
y<- data1$average
plot(x,y,col = "orange",main = "average housing price & airbnb density Regression",
     abline(lm(y~x)),cex = 1,pch = 18,xlab = "type of private density",ylab = "average housing price")

data1 <- read.csv("relationhighentireall.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(average ~ densityairbnb, data = data1)
summary(model1)

data1 <- read.csv("relationhighentireallnew.csv")
library(tidyverse)
names(data1)
summary(data1)
model1 <- lm(average ~ densityairbnb, data = data1)
summary(model1)


