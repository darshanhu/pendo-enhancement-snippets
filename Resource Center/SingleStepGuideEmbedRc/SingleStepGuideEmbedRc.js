(function resourceCenterOpenGuide() { 
    if (!pendo.designerEnabled) { 
        document.getElementById('pendo-resource-center-container').setAttribute('style', 'display:none'); 
        //the below line is responsible for opening the guide 
        pendo.showGuideById("TXHY5Qt8ATfiJBE5e1hQSKL3MIM") 
        step.eventRouter.eventable.trigger('pendoEvent', { 
            action: 'returnToResourceCenterHome' 
        }); 
    } 
 })();