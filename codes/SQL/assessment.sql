select*from housing a, airbnb b where a.nbhd=b.neighbourhood;
select nbhd, LOG(average), log(airbnb_number) as lognumber  from average_number;
select*from average_number a, neighbourhood b where a.nbhd=b.NTAName;
select nbhd, average, airbnb_number/(shape_area/100000) as densityairbnb from alldata;
select nbhd, LOG(average), log(airbnb_number/(shape_area/100000)) as densityairbnb from alldata;
select*from highentirenumber a, final_housing b where a.ntaname_1=b.ntaname_1;
select*from highentirehouse a, neighbourhood b where a.ntaname_1=b.NTAName;
select ntaname_1, average, number/(Shape_Area/100000) as densityairbnb from highentireall;