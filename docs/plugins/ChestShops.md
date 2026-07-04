# Chest Shop

This plugin allows players to create shops out of regular chests and signs. These shops allow other players to either buy from you or sell things to you using the chest shop.

The format to create a shop for players to buy items from you is as follows:

Line by line
1. blank
2. [amount of items to sell]
3. B [sell price]
4. ? (right click the sign with an item to set the item ID


For an example, this would be how you sell 64 diamonds

1. 
2. 64
3. 3500
4. ?


The blank line will convert to the name of the player who placed the sign. 
The 64 signifies that when someone buys from your chest shop, they will get 64 diamonds. 
The 3500 signifies that the player is paying that much for the diamonds. 
The question mark will turn into *Diamond* once you right click the sign with a diamond. 


If you want players to be able to sell items to you, all you need to do is switch the "B" in line 3 to an "S" to signify that the player is selling items instead of buying.

Shop chests are completely protected and can only be opened by the player who created the shop.

