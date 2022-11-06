// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Card is ERC1155, Ownable, ERC1155Burnable {
    
    uint256 public constant social = 0;
    uint256 public constant profesional = 1;
    uint256 public constant experience = 2;

    string public baseURI;
    uint public cardID;

    constructor(address owner, string memory _baseURI, uint _cardID) ERC1155("") {
        baseURI = _baseURI;
        cardID = _cardID;

        _setURI(_baseURI); 

        _mint(owner, social, 1, "");
        _mint(owner, profesional, 1, "");
        _mint(owner, experience, 1, "");
    }

    // ipfs://#/{personID}/{typeID}.json
    function uri(uint256 typeId) override public view returns (string memory) {
        return string(
                abi.encodePacked(
                    baseURI,
                    Strings.toString(cardID),
                    "/",
                    Strings.toString(typeId),
                    ".json"
                )
            );
    }

    function contacturi() public view returns (string memory) {
        return string(
            abi.encodePacked(
                    baseURI,
                    Strings.toString(cardID),
                    "/contact.json"
                )
        );
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }
}
