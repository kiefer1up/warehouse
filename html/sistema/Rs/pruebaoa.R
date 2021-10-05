#!/usr/bin/Rscript
x <- rnorm(5,1,1)
png(filename="/var/www/html/duarcon/sistema/R/testa.png", width=500, height=500)
hist(x, col="red")
dev.off()
