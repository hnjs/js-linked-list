/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

/*
 * Author		: Harish Narayanan
 * Date			: Jun 6 2015
 * description	: Forked from DevLeague github account and solved for fun, entertainment & learning
 */
 
function linkedListGenerator(){
	function LinkedList() {
		this.length = 0;
		this.head = null;
	}

	LinkedList.prototype.isEmpty = function() {
		return this.head === null;
	}

	LinkedList.prototype.getHead = function() {
		if (this.isEmpty()) {return null;}
		return this.head;
	}

	LinkedList.prototype.getTail = function() {
		if (this.isEmpty()) {return null;}
		var current = this.head;

		while (current.next) {
			current = current.next;
		}
		return current;
	}

	LinkedList.prototype.add = function(value) {
		var node = {value: value, next: null};

		if (this.isEmpty()) {
			this.head = node;
		} else {
			var current = this.head;
			while (current.next) {
				current = current.next
			}
			current.next = node;
		}
		this.length++;
		return node;
	}

	LinkedList.prototype.get = function(index) {
		var current = this.head,
			i 	 	= 0;

		if (index < 0 || index > this.length-1) {
			return false;
		}
		while (i++ < index) {
			current = current.next;
		}
		return current;
	}

	LinkedList.prototype.remove = function(index) {
		if (index < 0 || index > this.length-1) {return false;}

		var current = this.head,
			previous, 
			i 		= 0;
		if (index === 0) {
			this.head = current.next;
		} else {
			while (i++ < index) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.length--;
	}

	LinkedList.prototype.insert = function(value, index) {
		if (index < 0 || index > this.length-1) {return false;}

		var node	= {value: value, next: null},
			current = this.head,
			previous,
			i 		= 0;

		if (index === 0) {
			node.next = current;
			this.head = node;
		} else {
			while (i++ < index) {
				previous = current;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
		}
		this.length++;
	}

	return new LinkedList();
}