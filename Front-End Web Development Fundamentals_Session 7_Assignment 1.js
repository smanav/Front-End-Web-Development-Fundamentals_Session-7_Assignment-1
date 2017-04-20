                       function circle(r)
                       
                       {
                         
                         this.r = r;
                         
                         // area method
                         
                         this.area = function () 
                                                 
                                                 {
                                                   
                                                   return Math.PI * this.r * this.r;
                                                 
                                                 };
                         
                        
                       }
                        
                        var c = new circle(7);
                        
                        console.log('Area =', c.area().toFixed(0));
                        
                       