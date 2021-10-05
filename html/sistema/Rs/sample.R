#!/usr/lib/R/bin/Rscript
#Define the file name that will be deleted
args <- commandArgs(TRUE)
N<- args[1];
x <- rnorm(N,1,1)
png(filename="/var/www/duarcon/sistema/Rs/test.png", width= 500, height=500)
hist(x, col="red")
dev.off()
