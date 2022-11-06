// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./Card.sol";

contract CardFactory is Ownable {

    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    string public baseURI;
    mapping(address => address) public personToCard;
    mapping(address => uint) public personToID;

    function createCard(address person) public onlyOwner {
        require(personToCard[person] == address(0), "Card already exists");
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        string memory tempURI = _newURI();
        Card card = new Card(person, tempURI, newTokenId);
        card.transferOwnership(person);

        personToCard[person] = address(card);
        personToID[person] = newTokenId;
    }

    function _newURI() internal view returns (string memory) {
        return string(
            abi.encodePacked(
                baseURI, 
                "/"
            ));
    }

    function _setURI(string memory _baseURI) public onlyOwner {
        baseURI = _baseURI;
    }

}