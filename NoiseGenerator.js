export class NoiseGenerator {
    
    static noise(ctx) {
        
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var data = new ImageData(width, height);
        
        
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                
                var i = 4 * (x + (width * y));
                var r = Math.sin(Math.sqrt((x-(width/2))**2+(y-(height/2))**2))*255;
                
                data.data[i] = r;
                data.data[i+1] = r;
                data.data[i+2] = r;
                data.data[i+3] = 255;
            
            }
        }
        
        
        ctx.putImageData(data,0,0);
    }
    
    
    static waveNoise(ctx) {
        
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var data = new ImageData(width, height);
        
        
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                
                var i = 4 * (x + (width * y));
                var r = Math.sin(Math.sqrt((x-(width/2))**2+(y-(height/2))**2))*255;
                
                data.data[i] = r;
                data.data[i+1] = r;
                data.data[i+2] = r;
                data.data[i+3] = 255;
            
            }
        }
        
        
        ctx.putImageData(data,0,0);
    }
    
    
    static greyNoise(ctx) {
        
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var data = new ImageData(width, height);
        
        for (var i = 0; i < width * height * 4; i += 4) {
            var r = Math.random() * 255;
            data.data[i] = r;
            data.data[i+1] = r;
            data.data[i+2] = r;
            data.data[i+3] = 255;
        }
        ctx.putImageData(data,0,0);
    }
    
    
    static rgbNoise(ctx) {
        
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var data = new ImageData(width, height);
        
        for (var i = 0; i < width * height * 4; i += 4) {
            data.data[i] = (Math.random() * 255);
            data.data[i+1] = (Math.random() * 255);
            data.data[i+2] = (Math.random() * 255);
            data.data[i+3] = 255;
        }
        ctx.putImageData(data,0,0);
    }
    
}