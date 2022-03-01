document.addEventListener("DOMContentLoaded", function(){
    var locations = ["bed room","bathroom","kitchen","closet","laundry room","master bed room","office","den","pool house","patio"]
    var weapons = ["rock","candle stick","pistol","lead pipe","glass shard","knife","sword","bomb","ice block","cheese wheel","wooden stake","bow and arrow","piano wire","poison","liquid nitrogen","nail gun","tire iron","Cowboy repeater","plastic bag","wooden club"]
    var friends = ["Jimmy", "Robert", "Samuel", "Roberto", "Cisco"]

    for(var i = 1; i <= 100; i++){
        var accusations = document.createElement('h3')
        var accuText = document.createTextNode('Accusation ' + i)
        accusations.appendChild(accuText)
        document.body.appendChild(accusations)
        accusations.addEventListener('click', getAlert(i))

    }

    function getAlert(i){
        var chosenFriend = friends[i % 5]
        var chosenLocation = locations[i % 10]
        var chosenWeapon = weapons[i % 20]
        function alertAccuse(){
            alert('Accusation ' + i + ': I accuse ' + chosenFriend + ' with the ' + chosenWeapon + " in the " + chosenLocation + "!")
        }
        return alertAccuse
    }

})